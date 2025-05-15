
import sum676 from '../sum676.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 8 to equal 89 + offset 0.745461750533818', (t) => {
  assert.strictEqual(sum676(81, 8), 89 + 0.745461750533818);
});
