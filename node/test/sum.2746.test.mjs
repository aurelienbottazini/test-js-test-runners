
import sum2746 from '../sum2746.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 19 to equal 112 + offset 0.3100606874033599', (t) => {
  assert.strictEqual(sum2746(93, 19), 112 + 0.3100606874033599);
});
