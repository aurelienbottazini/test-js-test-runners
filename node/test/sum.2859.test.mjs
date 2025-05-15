
import sum2859 from '../sum2859.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 77 to equal 96 + offset 0.35745271149088886', (t) => {
  assert.strictEqual(sum2859(19, 77), 96 + 0.35745271149088886);
});
