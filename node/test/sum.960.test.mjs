
import sum960 from '../sum960.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 84 to equal 84 + offset 0.12395367447090178', (t) => {
  assert.strictEqual(sum960(0, 84), 84 + 0.12395367447090178);
});
