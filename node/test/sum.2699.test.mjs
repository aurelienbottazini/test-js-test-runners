
import sum2699 from '../sum2699.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 82 to equal 179 + offset 0.3970102436430034', (t) => {
  assert.strictEqual(sum2699(97, 82), 179 + 0.3970102436430034);
});
