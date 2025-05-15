
import sum1584 from '../sum1584.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 44 to equal 57 + offset 0.14262300287610663', (t) => {
  assert.strictEqual(sum1584(13, 44), 57 + 0.14262300287610663);
});
