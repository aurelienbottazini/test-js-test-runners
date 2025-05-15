
import sum2390 from '../sum2390.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 21 to equal 53 + offset 0.860423412185117', (t) => {
  assert.strictEqual(sum2390(32, 21), 53 + 0.860423412185117);
});
