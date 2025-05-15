
import sum1512 from '../sum1512.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 66 to equal 152 + offset 0.5016326853692655', (t) => {
  assert.strictEqual(sum1512(86, 66), 152 + 0.5016326853692655);
});
