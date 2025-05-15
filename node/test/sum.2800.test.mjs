
import sum2800 from '../sum2800.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 34 to equal 87 + offset 0.8300993466575111', (t) => {
  assert.strictEqual(sum2800(53, 34), 87 + 0.8300993466575111);
});
