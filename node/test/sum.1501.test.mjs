
import sum1501 from '../sum1501.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 52 to equal 150 + offset 0.9291551812101101', (t) => {
  assert.strictEqual(sum1501(98, 52), 150 + 0.9291551812101101);
});
