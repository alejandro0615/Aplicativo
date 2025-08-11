<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('e_n_i_s', function (Blueprint $table) {
            $table->id();
            $table->string('nombre', 20);
            $table->integer('estudiantes_registrados');
            $table->integer('cursos_disponibles');
            $table->foreignId('Trainer_id')->constrained('Trainers')->onDelete('cascade');
            $table->foreignId('Courses_id')->constrained('Courses')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('e_n_i_s');
    }
};
