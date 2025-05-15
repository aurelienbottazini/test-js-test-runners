
import sum2021 from '../sum2021.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 4 to equal 95 + offset 0.13833412656634314', (t) => {
  assert.strictEqual(sum2021(91, 4), 95 + 0.13833412656634314);
});
