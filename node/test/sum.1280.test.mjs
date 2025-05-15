
import sum1280 from '../sum1280.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 66 to equal 97 + offset 0.6546988799326442', (t) => {
  assert.strictEqual(sum1280(31, 66), 97 + 0.6546988799326442);
});
