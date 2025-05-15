
import sum4392 from '../sum4392.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 61 to equal 80 + offset 0.5123863443439519', (t) => {
  assert.strictEqual(sum4392(19, 61), 80 + 0.5123863443439519);
});
