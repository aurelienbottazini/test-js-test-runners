
import sum3713 from '../sum3713.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 84 to equal 91 + offset 0.8351231962148586', (t) => {
  assert.strictEqual(sum3713(7, 84), 91 + 0.8351231962148586);
});
