
import sum2986 from '../sum2986.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 62 to equal 71 + offset 0.7158190242885039', (t) => {
  assert.strictEqual(sum2986(9, 62), 71 + 0.7158190242885039);
});
