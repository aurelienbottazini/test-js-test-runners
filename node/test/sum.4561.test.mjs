
import sum4561 from '../sum4561.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 94 to equal 193 + offset 0.06353308127304857', (t) => {
  assert.strictEqual(sum4561(99, 94), 193 + 0.06353308127304857);
});
