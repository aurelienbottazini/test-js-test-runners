
import sum1713 from '../sum1713.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 57 to equal 122 + offset 0.5583879622744831', (t) => {
  assert.strictEqual(sum1713(65, 57), 122 + 0.5583879622744831);
});
