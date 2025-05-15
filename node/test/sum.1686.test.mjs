
import sum1686 from '../sum1686.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 21 + 54 to equal 75 + offset 0.319239011703504', (t) => {
  assert.strictEqual(sum1686(21, 54), 75 + 0.319239011703504);
});
