
import sum2085 from '../sum2085.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 68 to equal 151 + offset 0.4536938755169907', (t) => {
  assert.strictEqual(sum2085(83, 68), 151 + 0.4536938755169907);
});
