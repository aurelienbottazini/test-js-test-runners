
import sum2636 from '../sum2636.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 76 to equal 78 + offset 0.4971062814062569', (t) => {
  assert.strictEqual(sum2636(2, 76), 78 + 0.4971062814062569);
});
