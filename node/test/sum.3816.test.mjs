
import sum3816 from '../sum3816.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 89 to equal 154 + offset 0.39785172294620497', (t) => {
  assert.strictEqual(sum3816(65, 89), 154 + 0.39785172294620497);
});
