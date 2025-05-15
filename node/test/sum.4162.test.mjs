
import sum4162 from '../sum4162.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 80 to equal 174 + offset 0.0808513359851949', (t) => {
  assert.strictEqual(sum4162(94, 80), 174 + 0.0808513359851949);
});
