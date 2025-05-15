
import sum4163 from '../sum4163.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 84 to equal 116 + offset 0.3073624136832256', (t) => {
  assert.strictEqual(sum4163(32, 84), 116 + 0.3073624136832256);
});
