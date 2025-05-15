
import sum3935 from '../sum3935.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 79 to equal 148 + offset 0.5017518965540194', (t) => {
  assert.strictEqual(sum3935(69, 79), 148 + 0.5017518965540194);
});
