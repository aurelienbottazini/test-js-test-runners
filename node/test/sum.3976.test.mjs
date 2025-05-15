
import sum3976 from '../sum3976.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 29 to equal 80 + offset 0.4583681500590344', (t) => {
  assert.strictEqual(sum3976(51, 29), 80 + 0.4583681500590344);
});
