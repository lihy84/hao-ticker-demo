-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Ticker" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "historicalData" TEXT NOT NULL DEFAULT '[]'
);
INSERT INTO "new_Ticker" ("id", "name", "price") SELECT "id", "name", "price" FROM "Ticker";
DROP TABLE "Ticker";
ALTER TABLE "new_Ticker" RENAME TO "Ticker";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
