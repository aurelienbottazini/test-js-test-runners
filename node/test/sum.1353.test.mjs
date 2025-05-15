
import sum1353 from '../sum1353.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 27 to equal 93 + offset 0.08928823172293765', (t) => {
  assert.strictEqual(sum1353(66, 27), 93 + 0.08928823172293765);
});
