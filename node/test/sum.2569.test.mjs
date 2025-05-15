
import sum2569 from '../sum2569.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 24 to equal 122 + offset 0.6922731944580323', (t) => {
  assert.strictEqual(sum2569(98, 24), 122 + 0.6922731944580323);
});
