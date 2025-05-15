
import sum3843 from '../sum3843.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 40 to equal 60 + offset 0.9039020189995655', (t) => {
  assert.strictEqual(sum3843(20, 40), 60 + 0.9039020189995655);
});
