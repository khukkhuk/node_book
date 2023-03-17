-- AlterTable
ALTER TABLE `users` MODIFY `last_name` VARCHAR(191) NULL,
    MODIFY `tel` VARCHAR(191) NULL,
    MODIFY `email` VARCHAR(191) NULL,
    MODIFY `username` VARCHAR(191) NULL,
    MODIFY `password` VARCHAR(191) NULL,
    MODIFY `updated` DATETIME(3) NULL,
    MODIFY `deleted` DATETIME(3) NULL;
