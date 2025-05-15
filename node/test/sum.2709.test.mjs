
import sum2709 from '../sum2709.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 70 to equal 74 + offset 0.8609291782167966', (t) => {
  assert.strictEqual(sum2709(4, 70), 74 + 0.8609291782167966);
});
