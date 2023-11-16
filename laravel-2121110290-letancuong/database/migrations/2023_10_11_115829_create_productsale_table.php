<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('db_productsale', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->unsignedInteger('product_id');
            $table->float('price_sale');
            $table->unsignedInteger('qty');
            $table->dateTime('data_begin');
            $table->dateTime('data_end');
            $table->unsignedInteger('created_by')->default(1);
            $table->unsignedInteger('updated_by')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('db_productsale');
    }
};
