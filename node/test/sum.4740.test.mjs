
import sum4740 from '../sum4740.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 17 to equal 68 + offset 0.447124226514085', (t) => {
  assert.strictEqual(sum4740(51, 17), 68 + 0.447124226514085);
});
