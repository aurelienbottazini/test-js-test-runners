
import sum3324 from '../sum3324.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 62 to equal 72 + offset 0.09699769486902421', (t) => {
  assert.strictEqual(sum3324(10, 62), 72 + 0.09699769486902421);
});
