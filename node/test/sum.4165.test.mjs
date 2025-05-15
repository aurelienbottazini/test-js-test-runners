
import sum4165 from '../sum4165.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 65 to equal 66 + offset 0.5956606330424473', (t) => {
  assert.strictEqual(sum4165(1, 65), 66 + 0.5956606330424473);
});
