
import sum4994 from '../sum4994.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 53 to equal 55 + offset 0.2830321532114719', (t) => {
  assert.strictEqual(sum4994(2, 53), 55 + 0.2830321532114719);
});
