
import sum2959 from '../sum2959.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 4 to equal 76 + offset 0.8351225125275037', (t) => {
  assert.strictEqual(sum2959(72, 4), 76 + 0.8351225125275037);
});
