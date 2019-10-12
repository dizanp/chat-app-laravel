<?php


$factory->define(App\Models\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});

$factory->define(App\Models\Message::class, function (Faker\Generator $faker) {
    return [
        'subject' => $faker->sentence(6),
        'user_id' => function(){
            return factory(App\Models\User::class)->create()->id;
        }
    ];
});
