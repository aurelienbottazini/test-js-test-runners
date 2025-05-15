
import sum3586 from '../sum3586.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 52 to equal 144 + offset 0.2555775829441912', (t) => {
  assert.strictEqual(sum3586(92, 52), 144 + 0.2555775829441912);
});
