
import sum992 from '../sum992.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 46 to equal 117 + offset 0.30255181237670326', (t) => {
  assert.strictEqual(sum992(71, 46), 117 + 0.30255181237670326);
});
