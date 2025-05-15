
import sum1837 from '../sum1837.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 6 to equal 46 + offset 0.582115405288649', (t) => {
  assert.strictEqual(sum1837(40, 6), 46 + 0.582115405288649);
});
