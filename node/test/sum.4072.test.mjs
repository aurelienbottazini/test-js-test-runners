
import sum4072 from '../sum4072.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 83 to equal 180 + offset 0.94807277582838', (t) => {
  assert.strictEqual(sum4072(97, 83), 180 + 0.94807277582838);
});
