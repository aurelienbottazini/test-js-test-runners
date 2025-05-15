
import sum4733 from '../sum4733.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 32 to equal 77 + offset 0.5735909595554208', (t) => {
  assert.strictEqual(sum4733(45, 32), 77 + 0.5735909595554208);
});
