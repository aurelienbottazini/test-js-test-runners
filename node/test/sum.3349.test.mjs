
import sum3349 from '../sum3349.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 62 to equal 87 + offset 0.48811526418926854', (t) => {
  assert.strictEqual(sum3349(25, 62), 87 + 0.48811526418926854);
});
