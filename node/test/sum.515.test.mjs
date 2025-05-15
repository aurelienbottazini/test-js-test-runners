
import sum515 from '../sum515.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 51 to equal 65 + offset 0.10174402409268335', (t) => {
  assert.strictEqual(sum515(14, 51), 65 + 0.10174402409268335);
});
