
import sum3306 from '../sum3306.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 79 to equal 85 + offset 0.019758089850524296', (t) => {
  assert.strictEqual(sum3306(6, 79), 85 + 0.019758089850524296);
});
