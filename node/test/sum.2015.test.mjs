
import sum2015 from '../sum2015.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 57 to equal 110 + offset 0.3725949871673979', (t) => {
  assert.strictEqual(sum2015(53, 57), 110 + 0.3725949871673979);
});
