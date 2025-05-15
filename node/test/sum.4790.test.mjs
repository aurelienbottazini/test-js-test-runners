
import sum4790 from '../sum4790.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 38 to equal 65 + offset 0.802383651808604', (t) => {
  assert.strictEqual(sum4790(27, 38), 65 + 0.802383651808604);
});
