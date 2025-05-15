
import sum4404 from '../sum4404.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 22 to equal 37 + offset 0.21224369660910547', (t) => {
  assert.strictEqual(sum4404(15, 22), 37 + 0.21224369660910547);
});
