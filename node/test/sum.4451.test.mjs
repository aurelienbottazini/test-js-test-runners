
import sum4451 from '../sum4451.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 50 to equal 67 + offset 0.17849689815559722', (t) => {
  assert.strictEqual(sum4451(17, 50), 67 + 0.17849689815559722);
});
