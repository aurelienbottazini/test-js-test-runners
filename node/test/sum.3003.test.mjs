
import sum3003 from '../sum3003.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 81 to equal 83 + offset 0.3928428533453845', (t) => {
  assert.strictEqual(sum3003(2, 81), 83 + 0.3928428533453845);
});
