
import sum1556 from '../sum1556.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 64 to equal 76 + offset 0.22926753814975376', (t) => {
  assert.strictEqual(sum1556(12, 64), 76 + 0.22926753814975376);
});
