
import sum1650 from '../sum1650.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 39 to equal 70 + offset 0.3749747760955848', (t) => {
  assert.strictEqual(sum1650(31, 39), 70 + 0.3749747760955848);
});
